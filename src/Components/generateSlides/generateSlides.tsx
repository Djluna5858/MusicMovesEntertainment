import { PromPhoto, BirthdayPhoto, RogerPhoto, Djboard4Photo, Djboard2Photo, Djboard3Photo, DjboardPhoto, FundraiserPhoto, JohnBorbaPhoto, MusicPhoto, OfficePartyPhoto, PartyPhoto, PhotoboothPhoto, PhotoTakingPhoto, SoundnLightingPhoto, GradPhoto, LargeHousePhoto } from "../../Resources/Resources";

/**
 * Return an array with objects containing data of sample images.
 *
 * @param length - Optional. A number of slides.
 * @param sig    - Optional. The signature for getting a different image.
 *
 * @return An array with objects for sample images.
 */
const serviceImages = [Djboard2Photo, PhotoTakingPhoto, PhotoboothPhoto, OfficePartyPhoto, SoundnLightingPhoto, LargeHousePhoto, PartyPhoto]

export function generateSlides( length = 7, sig = 0 ): Array<{ look: string, src: string, alt: string }> {
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