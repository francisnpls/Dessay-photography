
const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    PositionCenter: "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]",
  
    heading2: "font-shippori font-semibold xs:text-[70px] text-[50px] text-white xs:leading-[90px] leading-[70px] w-full",
    paragraph: "font-montserrat font-normal text-dimWhite md:text-[18] text-[16px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-10",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };

  
  export default styles;