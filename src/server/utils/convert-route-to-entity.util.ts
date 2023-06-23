const mapping: Record<string, string> = {
  courses: 'course',
  'live-classes': 'live_class',
  organizations: 'organization',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
