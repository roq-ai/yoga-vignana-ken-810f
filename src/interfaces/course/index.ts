import { LiveClassInterface } from 'interfaces/live-class';
import { SubscriptionInterface } from 'interfaces/subscription';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  monthly_payment: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  live_class?: LiveClassInterface[];
  subscription?: SubscriptionInterface[];
  organization?: OrganizationInterface;
  _count?: {
    live_class?: number;
    subscription?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
