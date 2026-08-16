export interface NotificationPreferencePayload {
  announcements: boolean;
  breakingNews: boolean;
  exchangeRateAlerts: boolean;
}

// Intentionally unimplemented until backend contracts are defined.
export async function updateNotificationPreferences(_payload: NotificationPreferencePayload) {
  return Promise.resolve();
}
