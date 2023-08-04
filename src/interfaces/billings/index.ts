import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BillingsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  order_summary?: string;
  total_value?: number;
  table_number?: string;
  user_id?: string;

  user?: UserInterface;
  _count?: {};
}

export interface BillingsGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_summary?: string;
  table_number?: string;
  user_id?: string;
}
