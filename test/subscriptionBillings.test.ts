import {Client, Environment, Models} from '../src/api';

describe('Subscription Billing API', () => {

    let client: Client;
    let fixedIntervalId: string;
    let periodicId: string;

    beforeAll(() => {
        const userName = 'UStxEci4vXxGDWLQhNvao7YY';
        const password = '25038781-2369-4113-8187-34780e91052e';

        client = new Client(userName, password, Environment.Test);
    });

    test("Test: Create subscription schedule (Fixed time interval)", async() => {
        const subscriptionScheduleRequest: Models.CreateSubscriptionScheduleRequest = {
            lineItemType: Models.CreateSubscriptionScheduleRequest.LineItemTypeEnum.Fee,
            nickname: "Fixed_Time_Subscription_Schedule",
            fixedTimeIntervalOffset: {
                intervalCount: 4,
                hourlyInterval: 24
            },
            subscriptionType: Models.CreateSubscriptionScheduleRequest.SubscriptionTypeEnum.FixedTimeInterval
        };

        const subscriptionSchedule = await client.SubscriptionSchedules.create(subscriptionScheduleRequest);
        fixedIntervalId = <string>subscriptionSchedule.id;
        expect(subscriptionSchedule.createdBy).toBe("UStxEci4vXxGDWLQhNvao7YY");
        expect(subscriptionSchedule.nickname).toBe(subscriptionScheduleRequest.nickname);
        expect(subscriptionSchedule.subscriptionType).toBe(subscriptionScheduleRequest.subscriptionType);
    });

    test("Test: Create subscription schedule (Periodic monthly)", async() => {
        const subscriptionScheduleRequest: Models.CreateSubscriptionScheduleRequest = {
            lineItemType: Models.CreateSubscriptionScheduleRequest.LineItemTypeEnum.Fee,
            nickname: "Monthly_Subscription_Schedule",
            periodOffset: {
                day: 1,
                month: null
            },
            subscriptionType: Models.CreateSubscriptionScheduleRequest.SubscriptionTypeEnum.PeriodicMonthly
        };

        const subscriptionSchedule = await client.SubscriptionSchedules.create(subscriptionScheduleRequest);

        expect(subscriptionSchedule.createdBy).toBe("UStxEci4vXxGDWLQhNvao7YY");
        expect(subscriptionSchedule.nickname).toBe(subscriptionScheduleRequest.nickname);
        expect(subscriptionSchedule.subscriptionType).toBe(subscriptionScheduleRequest.subscriptionType);
    });

    test("Test: Create subscription schedule (Periodic yearly)", async() => {
        const subscriptionScheduleRequest: Models.CreateSubscriptionScheduleRequest = {
            lineItemType: Models.CreateSubscriptionScheduleRequest.LineItemTypeEnum.Fee,
            nickname: "Yearly_Subscription_Schedule",
            periodOffset: {
                day: 5,
                month: 1
            },
            subscriptionType: Models.CreateSubscriptionScheduleRequest.SubscriptionTypeEnum.PeriodicYearly
        };

        const subscriptionSchedule = await client.SubscriptionSchedules.create(subscriptionScheduleRequest);
        periodicId = <string>subscriptionSchedule.id;
        expect(subscriptionSchedule.createdBy).toBe("UStxEci4vXxGDWLQhNvao7YY");
        expect(subscriptionSchedule.nickname).toBe(subscriptionScheduleRequest.nickname);
        expect(subscriptionSchedule.subscriptionType).toBe(subscriptionScheduleRequest.subscriptionType);
        expect(subscriptionSchedule.periodOffset?.day).toBe(subscriptionScheduleRequest.periodOffset?.day);
    });

    test("Test: List subscription schedules", async() => {
        const subscriptionSchedulesList = await client.SubscriptionSchedules.list();

        expect(subscriptionSchedulesList.page.limit).toEqual(expect.any(Number));
        if (subscriptionSchedulesList.page.nextCursor != undefined){
            expect(subscriptionSchedulesList.page.nextCursor).toEqual(expect.any(String));
        }        
        expect(subscriptionSchedulesList.size).toEqual(expect.any(Number));
    });

    test("Fetch subscription schedule of type FIXED_TIME_INTERVAL", async() => {
        const subscriptionFixed = await client.SubscriptionSchedules.get(fixedIntervalId);

        expect(subscriptionFixed.id).toBe(fixedIntervalId);
        expect(subscriptionFixed.subscriptionType).toBe("FIXED_TIME_INTERVAL");
        expect(subscriptionFixed.fixedTimeIntervalOffset?.hourlyInterval).toBe(24);
    });

})
