export function removeSubscription(
  subscriptions: Array<ZenObservable.Subscription>,
  subscription: ZenObservable.Subscription,
) {
  subscriptions.splice(subscriptions.indexOf(subscription), 1)
}

export function closeAllSubscriptions(
  subscriptions: Array<ZenObservable.Subscription>,
) {
  subscriptions.forEach(subscription => subscription.unsubscribe())
  subscriptions.length = 0
}
