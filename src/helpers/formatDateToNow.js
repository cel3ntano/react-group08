import { formatDistanceToNow } from 'date-fns';
const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export default formatDateToNow;
