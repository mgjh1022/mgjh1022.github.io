import { LikeButton } from "./LikeButton";
import { MoreButton } from "./Album/MoreButton";
import { ButtonWrap, GalleryArea, MainPhoto, MainPhotoWrap, Page, Wording, WordingArea } from "./styeld";

export const PageGallery: React.FC = () => 
  <Page>
    <GalleryArea>
      <MainPhotoWrap>
        <MainPhoto />
      </MainPhotoWrap>
      <ButtonWrap>
        <LikeButton />
        좋아요 {0}개
        <MoreButton />
        </ButtonWrap>
    </GalleryArea>
    <WordingArea>
      <Wording />
    </WordingArea>
  </Page>