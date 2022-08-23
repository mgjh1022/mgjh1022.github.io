import { AccountButton } from "./AccountButton";
import { ContactButton } from "./Contact";
import { KakaoPayButton } from "./KakaoPayButton";
import {
  BankWarp,
  BrideBank,
  BrideName,
  BrideTitle,
  ContactArea,
  GroomBank,
  GroomName,
  GroomTitle,
  InfoArea,
  InfoTitle,
  Name,
  Page,
} from "./styeld";

export const PageInfo: React.FC = () => (
  <Page>
    <ContactArea>
      <Name />
      <ContactButton />
    </ContactArea>
    <InfoArea>
      <InfoTitle />
      <GroomTitle />
      <BankWarp>
        <GroomBank />
        <br />
        <GroomName />
        <KakaoPayButton href="https://qr.kakaopay.com/Ej9ONgNMC" />
        <AccountButton text="국민 173901-04-257994" />
      </BankWarp>

      <BrideTitle />
      <BankWarp>
        <BrideBank />
        <br />
        <BrideName />
        <KakaoPayButton href="https://qr.kakaopay.com/Ej9ONgNMC" />
        <AccountButton text="국민 392002-04-087795" />
      </BankWarp>
    </InfoArea>
  </Page>
);
