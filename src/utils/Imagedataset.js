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
    text: 'Swiperfirst',
    title: "Swipertitle",
    animation: <Lottie
      source={images.First_Swiper}
    />,

  },
  {
    key: 's2',
    text: 'Swiperfirsttwo',
    title: 'Swipertitletwo',
    animation: <Lottie
      source={images.Two_Swiper}
    />,
  },
  {
    key: 's3',
    text: 'Swiperfirstthree',
    title: 'Swipertitlethree',
    animation: <Lottie
      source={images.Three_Swiper}
    />,
    backgroundColor: 'transparent',
  },

]
export const Countrydata = [
  {
    "id": 1,
    "textsimple": 'Afghanistan',
    "digit": '+ 93',
  },
  {
    "id": 2,
    "textsimple": 'Albania',
    "digit": '+ 355',
  },
  {
    "id": 3,
    "textsimple": 'Algeria',
    "digit": '+ 213',
  },
  {
    "id": 1,
    "textsimple": 'Belgium',
    "digit": '+ 32',
  },
  {
    "id": 4,
    "textsimple": 'Belize',
    "digit": '+ 501',
  },
  {
    "id": 5,
    "textsimple": 'Benin',
    "digit": '+ 229',
  },
  {
    "id": 6,
    "textsimple": 'Gambia',
    "digit": '+ 220',
  },
  {
    "id": 7,
    "textsimple": 'Georgia',
    "digit": '+ 995',
  },
  {
    "id": 8,
    "textsimple": 'Greece',
    "digit": '+ 30',
  },
  {
    "id": 9,
    "textsimple": 'Hong Kong',
    "digit": '+ 852',
  },
  {
    "id": 10,
    "textsimple": 'Iceland',
    "digit": '+ 354',
  },
  {
    "id": 11,
    "textsimple": 'India',
    "digit": '+ 91',
  },
  {
    "id": 12,
    "textsimple": 'Japan',
    "digit": '+ 81',
  },
  {
    "id": 13,
    "textsimple": 'Kazakhstan',
    "digit": '+ 7',
  },
  {
    "id": 14,
    "textsimple": 'Lebanon',
    "digit": '+ 961',
  },
  {
    "id": 15,
    "textsimple": 'Liberia',
    "digit": '+ 231',
  },
  {
    "id": 16,
    "textsimple": 'Liechtenstein',
    "digit": '+ 423',
  },
  {
    "id": 17,
    "textsimple": 'Luxembourg',
    "digit": '+ 352',
  },
  {
    "id": 18,
    "textsimple": 'Malawi',
    "digit": '+ 256',
  },
  {
    "id": 19,
    "textsimple": 'Maldives',
    "digit": '+ 960',
  },
  {
    "id": 20,
    "textsimple": 'Mexico',
    "digit": '+ 52',
  },
]
export const Jobtypedata = [
  {
    "id": 1,
    "iconname": <Icon name="antdesign" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Designer_button',
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
    "Designertext": 'Marketing_text',
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
    "Designertext": 'Manjemant_text',
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
    "Designertext": 'Contract_text',
    "Checkbox": false,
  },
  {
    "id": 4,
    "iconname": <IconF name="target" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Intership_text',
    "Checkbox": false,
  },
  {
    "id": 5,
    "iconname": <Icon name="antdesign" size={20} color={Colors.black_text_color} />,
    "Designertext": 'Freelance_text',
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
    "text": 'Afghanistan_text',
  },
  {
    "id": 2,
    "text": 'Bermuda_text',
  },
  {
    "id": 3,
    "text": 'Dominica_terxt',
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
    "text": 'Any_text',
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
    "text": 'Any_text',
  },
  {
    "id": 2,
    "text": 'On_Site',
  },
  {
    "id": 3,
    "text": 'Remote_text',
  },
]
export const Featureddata = [
  {
    "id": 1,
    "text": 'Any_text',
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
    yearlytext: 'dolardprice_2',
    yearlytexttwo: 'New_Zealand',
  },
  {
    "id": 3,
    "text": 'Remote_text',
    image: images.Codingimage_two,
    text: 'Web_Designer',
    smalltext: 'React_Js',
    yearlytext: '$ 970 / Year',
    yearlytexttwo: 'Australia_text',
  },
]
export const Seeallsata = [
  {
    "id": 1,
    "text": 'Any_text',
    image: images.Google_image,
    text: 'Product_Designer',
    smalltext: 'Google_Text',
    yearlytext: 'dolardprice_4',
    yearlytexttwo: 'West_IndiesCaribbean',
  },
  {
    "id": 2,
    "text": 'On_Site',
    image: images.Codingimage_one,
    text: 'React_Designer',
    smalltext: 'React_Native',
    yearlytext: 'dolardprice_5',
    yearlytexttwo: 'New_Zealand',
  },
  {
    "id": 3,
    "text": 'Remote_text',
    image: images.Codingimage_two,
    text: 'Web_Designer',
    smalltext: 'React_Js',
    yearlytext: 'dolardprice_6',
    yearlytexttwo: 'Australia_text',
  },
  {
    "id": 4,
    "text": 'Remote_text',
    image: images.Codingimage_two,
    text: 'Web_Designer',
    smalltext: 'React_Js',
    yearlytext: 'dolardprice_8',
    yearlytexttwo: 'West_IndiesCaribbean',
  },
  {
    "id": 5,
    "text": 'Remote_text',
    image: images.Codingimage_two,
    text: 'Web_Designer',
    smalltext: 'React_Js',
    yearlytext: 'dolardprice_9',
    yearlytexttwo: 'Australia_text',
  },
]
export const Recommendeddata = [
  {
    "id": 1,
    "designerrole": 'UX_Designer',
    "yearlytext": 'dolardprice_10',
    "backgroundColorone": Colors.Liner_gradiunt_color_one,
    "LottieAnimation": images.UxDisigner_Digner,
    "Designer": 'Designer_button'
  },
  {
    "id": 2,
    "designerrole": 'Web_Developer',
    "yearlytext": 'dolardprice_11',
    "backgroundColorone": Colors.Liner_gradiunt_color_two,
    "LottieAnimation": images.Facebook_animation,
    "Designer": 'Developer'
  },
  {
    "id": 3,
    "designerrole": 'React_Developer',
    "yearlytext": 'dolardprice_12',
    "backgroundColorone": Colors.Liner_gradiunt_color_one,
    "LottieAnimation": images.UxDisigner_Digner,
    "Designer": 'Developer'
  },
]
export const Savejobdata = [
  {
    text: 'Developer',
    background: Colors.theme_backgound,
    devloperimage: images.Codingimage_one,
    buttontext: 'Open_text',
    fulltimetext: 'Full_Time',
    salerytext: 'dolardprice_13',
    Sponce: 'Sponce_texct',
    countryname: 'Afghanistan_text',
    url: RouteName.APPLY_JOB
  },
  {
    text: 'Designer_button',
    background: Colors.theme_backgound,
    devloperimage: images.Codingimage_two,
    buttontext: 'Close_text',
    fulltimetext: 'Full_Time',
    Sponce: 'Google_Text',
    countryname: 'Sofia_text',
    salerytext: 'dolardprice_14',
    url: RouteName.SAVE_JOB_LIST
  },
  {
    text: 'HR_Manager',
    background: Colors.Save_list_button_color_three,
    devloperimage: images.Codingimage_three,
    buttontext: 'Apply_text',
    fulltimetext: 'Part_Time_text',
    Sponce: 'Facebook_text',
    countryname: 'Norway_Notodden',
    salerytext: 'dolardprice_15',
    url: RouteName.APPLY_JOB
  },
  {
    text: 'Entrepreneur_text',
    background: Colors.Save_list_button_color,
    devloperimage: images.Codingimage_one,
    background: Colors.theme_backgound,
    buttontext: 'Open_text',
    Sponce: 'Google_Text',
    countryname: 'Colombia_Arias',
    fulltimetext: 'Full_Time',
    salerytext: 'dolardprice_16',
    url: RouteName.APPLY_JOB
  },
  {
    text: 'Artist_text',
    devloperimage: images.Codingimage_two,
    background: Colors.theme_backgound,
    buttontext: 'Open_text',
    fulltimetext: 'Part_Time_text',
    countryname: 'Sofia_text',
    Sponce: 'Sponce_texct',
    salerytext: 'dolardprice_17',
    url: RouteName.APPLY_JOB
  },
  {
    text: 'Marketing_text',
    devloperimage: images.Codingimage_three,
    background: Colors.theme_backgound,
    buttontext: 'Apply_text',
    fulltimetext: 'Part_Time_text',
    Sponce: 'Sponce_texct',
    salerytext: 'dolardprice_18',
    countryname: 'Afghanista_nKabu',
    url: RouteName.APPLY_JOB
  },
];
export const ApplyJobs = [
  {
    text: 'All_textset',
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    background: Colors.theme_backgound,
    devloperimage: images.UXdEsigner_one,
    buttontext: 'Open_text',
    fulltimetext: 'Full_Time'
  },
  {
    text: 'Designer_button',
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    background: Colors.theme_backgound,
    devloperimage: images.UXdEsigner_three,
    buttontext: 'Close_text',
    fulltimetext: 'Full_Time'
  },
  {
    text: 'Developer',
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    background: Colors.Save_list_button_color_three,
    devloperimage: images.UXdEsigner_two,
    buttontext: 'Apply_text',
    fulltimetext: 'Part_Time_text'
  },
  {
    text: 'Designer_button',
    Uxtext: 'UX_Designer',
    Uxdesigner: 'UX_Designer',
    background: Colors.Save_list_button_color,
    devloperimage: images.UxDisignerfourt_file,
    background: Colors.theme_backgound,
    buttontext: 'Open_text',
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
    Uxtext: 'Entrepreneur_text',
    Uxdesigner: 'Entrepreneur_text',
    devloperimage: images.UXdEsigner_two,
  },
  {
    Uxtext: 'Marketing_text',
    Uxdesigner: 'Marketing_text',
    devloperimage: images.UxDisignerfourt_file,
  },
];
export const Resumecheckbox = [
  {
    text: 'All_textset',
    background: Colors.theme_backgound,
    devloperimage: images.UXdEsigner_one,
    buttontext: 'Open_text',
    fulltimetext: 'Full_Time',
    CheckBoxitem: false,
  },
  {
    text: 'Designer_button',
    background: Colors.theme_backgound,
    devloperimage: images.UXdEsigner_three,
    buttontext: 'Close_text',
    fulltimetext: 'Designers',
    CheckBoxitem: false,
  },

];
export const Descrptiontext = [
  {
    description: 'Lorem_text_one',
  },
  {
    description: 'Lorem_text_two',
  },
  {
    description: 'Lorem_text_three',
  },
  {
    description: 'Lorem_text_four',
  },
];
export const Requiremnetsdata = [
  {
    description: 'All_textset_one',
  },
  {
    description: 'All_textset_two',
  },
  {
    description: 'All_textset_three',
  },
  {
    description: 'All_textset_four',
  },
];
export const Aboutdata = [
  {
    description: 'All_paregraph_one',
  },
  {
    description: 'All_paregraph_two',
  },
  {
    description: 'All_paregraph_three',
  },
  {
    description: 'All_paregraph_four',
  },
];
export const ReviewsText = [
  {
    Rating: <RatingScreen />,
    imagesone: images.UXdEsigner_two,
    datetext: 'jan_12_2023',
    username: 'Jofra_Archer',
  },
  {
    Rating: <RatingScreen />,
    imagesone: images.UXdEsigner_one,
    datetext: 'jan_11_2023',
    username: 'James_Vince',
  },
  {
    Rating: <RatingScreen />,
    imagesone: images.UXdEsigner_two,
    datetext: 'jan_16_2023',
    username: 'Liam_Dawson',
  },
  {
    Rating: <RatingScreen />,
    imagesone: images.UXdEsigner_three,
    datetext: 'jan_21_2023',
    username: 'James_Vince',
  },
];
export const Messagelistdata = [
  {
    "id": 1,
    "image": images.UXdEsigner_one,
    "text": 'Alastair_Cook',
    "texttwoset": 'Online_text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 2,
    "image": images.Chat_image_one,
    "text": 'Graham_Gooch',
    "texttwoset": 'Offline_text',
    "settime": 'Minutes_ago',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 3,
    "image": images.Chat_image_two,
    "text": 'Andrew_Flintoff',
    "texttwoset": 'Online_text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 4,
    "image": images.UxDisignerfourt_file,
    "text": 'Ian_Botham',
    "texttwoset": 'Online_text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 5,
    "image": images.Chat_image_five,
    "text": 'Sophia_Dunkley',
    "texttwoset": 'Offline_text',
    "settime": 'Minutes_ago_41',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 6,
    "image": images.Chat_image_six,
    "text": 'Lauren_Bell',
    "texttwoset": 'Online_text',
    "icon": <IconO name="dot-fill" size={30} color={'#40d375'} />,
  },
  {
    "id": 7,
    "image": images.Chat_image_saven,
    "text": 'Charlie_Dean',
    "texttwoset": 'Offline_text',
    "settime": 'Minutes_ago_1',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
  {
    "id": 8,
    "image": images.UxDisignerfourt_file,
    "text": 'Danni_Wyatt',
    "texttwoset": 'Offline_text',
    "settime": 'Minutes_ago_3',
    "icon": <IconO name="dot-fill" size={30} color={'red'} />,
  },
];



