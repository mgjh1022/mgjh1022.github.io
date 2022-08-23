import { DDay } from "./DDay";
import { Calendar, CalendarArea, Date, InfoArea, Page } from "./styeld";

export const PageCalendar: React.FC = () => 
  <Page>
    <InfoArea>
      <Date />
      <DDay />
    </InfoArea>
    <CalendarArea>
      <Calendar />
    </CalendarArea>
  </Page>