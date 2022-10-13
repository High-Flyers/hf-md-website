import { parseISO, format } from "date-fns";
import plLocale from "date-fns/locale/pl";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL, yyyy", { locale: plLocale })}
    </time>
  );
};

export default DateFormatter;
