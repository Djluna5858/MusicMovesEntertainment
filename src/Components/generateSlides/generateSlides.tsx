import { Djboard2Photo,OfficePartyPhoto, PartyPhoto, PhotoboothPhoto, PhotoTakingPhoto, SoundnLightingPhoto, LargeHousePhoto } from "../../Resources/Resources";

const serviceImages = [Djboard2Photo, PhotoTakingPhoto, PhotoboothPhoto, OfficePartyPhoto, SoundnLightingPhoto, LargeHousePhoto, PartyPhoto]

export function generateSlides( sig = 0 ): Array<{ look: string, src: string, alt: string }> {
    const test: Array<{ look: string, src: string, alt: string }> = serviceImages.map( ( value, index ) => {
      index = sig || index;
  
      return {
        look: `SP${ index }`,
        src: `${ value }`,
        alt: `Image ${ index + 1 }`,
      };
    } );
    return test;
  }