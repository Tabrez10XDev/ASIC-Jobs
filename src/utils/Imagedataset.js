import { Lottie, RatingScreen } from '../components';
import React from 'react';
import images from '../index';
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from '../utils';
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconT from "react-native-vector-icons/MaterialIcons";
import IconF from "react-native-vector-icons/Feather";
import IconO from 'react-native-vector-icons/Octicons';
import { RouteName } from '../routes';

export const Swiperdata = [
  {
    key: 's1',
    text: 'Swiper_First',
    title: "Swiper_Title",
    animation: <Lottie
      source={images.First_Swiper}
    />,

  },
  {
    key: 's2',
    text: 'Swiper_First_Two',
    title: 'Swiper_Title_Two',
    animation: <Lottie
      source={images.Two_Swiper}
    />,
  },
  {
    key: 's3',
    text: 'Swiper_First_Three',
    title: 'Swiper_Title_Three',
    animation: <Lottie
      source={images.Three_Swiper}
    />,
    backgroundColor: 'transparent',
  },
]
export const Jobtypedata = [
  {
    "id": 1,
    "iconname": <Icon name="antdesign" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Designer_Button',
    "CheckBoxitem": false,
  },
  {
    "id": 2,
    "iconname": <IconM name="developer-board" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Developer',
    "CheckBoxitem": false,
  },
  {
    "id": 3,
    "iconname": <IconT name="local-mall" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Marketing_Text',
    "CheckBoxitem": false,
  },
  {
    "id": 4,
    "iconname": <IconF name="target" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Administrative',
    "CheckBoxitem": false,
  },
  {
    "id": 5,
    "iconname": <Icon name="antdesign" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Manjemant_Text',
    "CheckBoxitem": false,
  },
  {
    "id": 6,
    "iconname": <Icon name="antdesign" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Graphic_Designer',
    "CheckBoxitem": false,
  },
  {
    "id": 7,
    "iconname": <IconT name="devices-other" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Other_Text',
    "CheckBoxitem": false,
  },
]
export const JobTimedata = [
  {
    "id": 1,
    "iconname": <Icon name="antdesign" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Full_Time',
    "Checkbox": false,
  },
  {
    "id": 2,
    "iconname": <IconM name="developer-board" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Part_time',
    "Checkbox": false,
  },
  {
    "id": 3,
    "iconname": <IconT name="local-mall" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Contract_Text',
    "Checkbox": false,
  },
  {
    "id": 4,
    "iconname": <IconF name="target" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Intership_Text',
    "Checkbox": false,
  },
  {
    "id": 5,
    "iconname": <Icon name="antdesign" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Freelance_Text',
    "Checkbox": false,
  },
  {
    "id": 6,
    "iconname": <Icon name="antdesign" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Graphic_Designer',
    "Checkbox": false,
  },
  {
    "id": 7,
    "iconname": <IconT name="devices-other" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Other_Text',
    "Checkbox": false,
  },
]
export const JobSelectdata = [
  {
    "id": 1,
    "text": 'Product_Designer',
  },
  {
    "id": 2,
    "text": 'Graphic_Designer',
  },
  {
    "id": 3,
    "text": 'Motion_Designer',
  },
  {
    "id": 4,
    "text": 'UX_Designer',
  },
  {
    "id": 5,
    "text": 'Full_Stack',
  },
  {
    "id": 6,
    "text": 'Developer',
  },
  {
    "id": 7,
    "text": 'Mobile_App_Desiner',
  },
]
export const SelectLOcation = [
  {
    "id": 1,
    "text": 'Afghanistan_Text',
  },
  {
    "id": 2,
    "text": 'Bermuda_Text',
  },
  {
    "id": 3,
    "text": 'Dominica_Text',
  },
  {
    "id": 4,
    "text": 'Dominican_Republic',
  },
  {
    "id": 5,
    "text": 'Equatorial_Guinea',
  },
  {
    "id": 6,
    "text": 'French_Polynesia',
  },
  {
    "id": 7,
    "text": 'Greece_text',
  },
]
export const JobTypedata = [
  {
    "id": 1,
    "text": 'Any_Text',
  },
  {
    "id": 2,
    "text": 'Full_Time',
  },
  {
    "id": 3,
    "text": 'Part_Time',
  },
]
export const Officedata = [
  {
    "id": 1,
    "text": 'Any_Text',
  },
  {
    "id": 2,
    "text": 'On_Site',
  },
  {
    "id": 3,
    "text": 'Remote_Text',
  },
]
export const Featureddata = [
  {
    "id": 1,
    "text": 'Any_Text',
    image: images.Google_image,
    text: 'Product_Designer',
    smalltext: 'Google_Text',
    yearlytext: 'dolardprice_1',
    yearlytexttwo: 'West_IndiesCaribbean',
  },
  {
    "id": 2,
    "text": 'On_Site',
    image: images.Codingimage_one,
    text: 'React_Designer',
    smalltext: 'React_Native',
    yearlytext: 'Dolardprice_2',
    yearlytexttwo: 'New_Zealand',
  },
  {
    "id": 3,
    "text": 'Remote_Text',
    image: images.Codingimage_two,
    text: 'Web_Designer',
    smalltext: 'React_Js',
    yearlytext: '$ 970 / Year',
    yearlytexttwo: 'Australia_Text',
  },
]
export const Seeallsata = [
  {
    "id": 1,
    "text": 'Any_Text',
    image: images.Google_image,
    text: 'Product_Designer',
    smalltext: 'Google_Text',
    yearlytext: 'Dolardprice_4',
    yearlytexttwo: 'West_IndiesCaribbean',
  },
  {
    "id": 2,
    "text": 'On_Site',
    image: images.Codingimage_one,
    text: 'React_Designer',
    smalltext: 'React_Native',
    yearlytext: 'Dolardprice_5',
    yearlytexttwo: 'New_Zealand',
  },
  {
    "id": 3,
    "text": 'Remote_Text',
    image: images.Codingimage_two,
    text: 'Web_Designer',
    smalltext: 'React_Js',
    yearlytext: 'Dolardprice_6',
    yearlytexttwo: 'Australia_Text',
  },
  {
    "id": 4,
    "text": 'Remote_Text',
    image: images.Codingimage_two,
    text: 'Web_Designer',
    smalltext: 'React_Js',
    yearlytext: 'Dolardprice_8',
    yearlytexttwo: 'West_IndiesCaribbean',
  },
  {
    "id": 5,
    "text": 'Remote_Text',
    image: images.Codingimage_two,
    text: 'Web_Designer',
    smalltext: 'React_Js',
    yearlytext: 'dolardprice_9',
    yearlytexttwo: 'Australia_Text',
  },
]
export const Recommendeddata = [
  {
    "id": 1,
    "designerrole": 'UX_Designer',
    "yearlytext": 'dolardprice_10',
    "backgroundColorone": Colors.lavender_blush_color,
    "LottieAnimation": images.UxDisigner_Digner,
    "Designer": 'Designer_Button'
  },
  {
    "id": 2,
    "designerrole": 'Web_Developer',
    "yearlytext": 'Dolardprice_11',
    "backgroundColorone": Colors.alice_blue_color,
    "LottieAnimation": images.Facebook_animation,
    "Designer": 'Developer'
  },
  {
    "id": 3,
    "designerrole": 'React_Developer',
    "yearlytext": 'Dolardprice_12',
    "backgroundColorone": Colors.lavender_blush_color,
    "LottieAnimation": images.UxDisigner_Digner,
    "Designer": 'Developer'
  },
]
export const Savejobdata = [
  {
    text: 'Developer',
    background: Colors.theme_background_brink_pink,
    devloperimage: images.Codingimage_one,
    buttontext: 'Open_Text',
    fulltimetext: 'Full_Time',
    salerytext: 'Dolardprice_13',
    Sponce: 'Sponce_Text',
    countryname: 'Afghanistan_Text',
    url: RouteName.APPLY_JOB
  },
  {
    text: 'Designer_Button',
    background: Colors.theme_background_brink_pink,
    devloperimage: images.Codingimage_two,
    buttontext: 'Close_Text',
    fulltimetext: 'Full_Time',
    Sponce: 'Google_Text',
    countryname: 'Sofia_Text',
    salerytext: 'Dolardprice_14',
    url: RouteName.SAVE_JOB_LIST
  },
  {
    text: 'HR_Manager',
    background: Colors.alice_blue_color,
    devloperimage: images.Codingimage_three,
    buttontext: 'Apply_text',
    fulltimetext: 'Part_Time_Text',
    Sponce: 'Facebook_Text',
    countryname: 'Norway_Notodden',
    salerytext: 'Dolardprice_15',
    url: RouteName.APPLY_JOB
  },
  {
    text: 'Entrepreneur_Text',
    background: Colors.linen_Color,
    devloperimage: images.Codingimage_one,
    background: Colors.theme_background_brink_pink,
    buttontext: 'Open_Text',
    Sponce: 'Google_Text',
    countryname: 'Colombia_Arias',
    fulltimetext: 'Full_Time',
    salerytext: 'Dolardprice_16',
    url: RouteName.APPLY_JOB
  },
  {
    text: 'Artist_Text',
    devloperimage: images.Codingimage_two,
    background: Colors.theme_background_brink_pink,
    buttontext: 'Open_Text',
    fulltimetext: 'Part_Time_Text',
    countryname: 'Sofia_Text',
    Sponce: 'Sponce_Text',
    salerytext: 'Dolardprice_17',
    url: RouteName.APPLY_JOB
  },
  {
    text: 'Marketing_Text',
    devloperimage: images.Codingimage_three,
    background: Colors.theme_background_brink_pink,
    buttontext: 'Apply_text',
    fulltimetext: 'Part_Time_Text',
    Sponce: 'Sponce_Text',
    salerytext: 'Dolardprice_18',
    countryname: 'Afghanista_NKabu',
    url: RouteName.APPLY_JOB
  },
];
export const ApplyJobs = [
  {
    text: 'All_textset',
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    background: Colors.theme_background_brink_pink,
    devloperimage: images.UXdEsigner_one,
    buttontext: 'Open_Text',
    fulltimetext: 'Full_Time'
  },
  {
    text: 'Designer_Button',
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    background: Colors.theme_background_brink_pink,
    devloperimage: images.UXdEsigner_three,
    buttontext: 'Close_Text',
    fulltimetext: 'Full_Time'
  },
  {
    text: 'Developer',
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    background: Colors.alice_blue_color,
    devloperimage: images.UXdEsigner_two,
    buttontext: 'Apply_text',
    fulltimetext: 'Part_Time_Text'
  },
  {
    text: 'Designer_Button',
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    background: Colors.linen_Color,
    devloperimage: images.UxDisignerfourt_file,
    background: Colors.theme_background_brink_pink,
    buttontext: 'Open_Text',
    fulltimetext: 'Full_Time'
  },
];
export const ApplyJobstwo = [
  {
    Uxtext: 'Developer',
    Uxdesigner: 'Developer',
    devloperimage: images.UXdEsigner_one,
  },
  {
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    devloperimage: images.UXdEsigner_three,
  },
  {
    Uxtext: 'Entrepreneur_Text',
    Uxdesigner: 'Entrepreneur_Text',
    devloperimage: images.UXdEsigner_two,
  },
  {
    Uxtext: 'Marketing_Text',
    Uxdesigner: 'Marketing_Text',
    devloperimage: images.UxDisignerfourt_file,
  },
];
export const Resumecheckbox = [
  {
    text: 'All_textset',
    background: Colors.theme_background_brink_pink,
    devloperimage: images.UXdEsigner_one,
    buttontext: 'Open_Text',
    fulltimetext: 'Full_Time',
    CheckBoxitem: false,
  },
  {
    text: 'Designer_Button',
    background: Colors.theme_background_brink_pink,
    devloperimage: images.UXdEsigner_three,
    buttontext: 'Close_Text',
    fulltimetext: 'Designers',
    CheckBoxitem: false,
  },

];
export const Descrptiontext = [
  {
    description: 'Lorem_Text_One',
  },
  {
    description: 'Lorem_Text_Two',
  },
  {
    description: 'Lorem_text_Three',
  },
  {
    description: 'Lorem_Text_Four',
  },
];
export const Requiremnetsdata = [
  {
    description: 'All_Text_One',
  },
  {
    description: 'All_Text_Two',
  },
  {
    description: 'All_Text_Three',
  },
  {
    description: 'All_Text_Four',
  },
];
export const Aboutdata = [
  {
    description: 'All_Paregraph_One',
  },
  {
    description: 'All_Paregraph_Two',
  },
  {
    description: 'All_Paregraph_Three',
  },
  {
    description: 'All_Paregraph_Four',
  },
];
export const ReviewsText = [
  {
    Rating: <RatingScreen />,
    imagesone: images.UXdEsigner_two,
    datetext: 'Jan_12_2023',
    username: 'Jofra_Archer',
  },
  {
    Rating: <RatingScreen />,
    imagesone: images.UXdEsigner_one,
    datetext: 'Jan_11_2023',
    username: 'James_Vince',
  },
  {
    Rating: <RatingScreen />,
    imagesone: images.UXdEsigner_two,
    datetext: 'Jan_16_2023',
    username: 'Liam_Dawson',
  },
  {
    Rating: <RatingScreen />,
    imagesone: images.UXdEsigner_three,
    datetext: 'Jan_21_2023',
    username: 'James_Vince',
  },
];
export const Messagelistdata = [
  {
    "id": 1,
    "image": images.UXdEsigner_one,
    "text": 'Alastair_Cook',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 2,
    "image": images.Chat_image_one,
    "text": 'Graham_Gooch',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 3,
    "image": images.Chat_image_two,
    "text": 'Andrew_Flintoff',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 4,
    "image": images.UxDisignerfourt_file,
    "text": 'Ian_Botham',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 5,
    "image": images.Chat_image_five,
    "text": 'Sophia_Dunkley',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_41',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 6,
    "image": images.Chat_image_six,
    "text": 'Lauren_Bell',
    "texttwoset": 'Online_Text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 7,
    "image": images.Chat_image_saven,
    "text": 'Charlie_Dean',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_1',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 8,
    "image": images.UxDisignerfourt_file,
    "text": 'Danni_Wyatt',
    "texttwoset": 'Offline_Text',
    "settime": 'Minutes_Ago_3',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
];



