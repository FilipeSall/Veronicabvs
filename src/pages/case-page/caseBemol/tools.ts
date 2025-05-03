import { ToolsIconInterface } from "../../../interfaces/components";
import { pushNotificationsInterface } from "../../../interfaces/case";
import educationVideo from "../../../assets/caseBemol/Estudos.mp4";
import topImgEducation from "../../../assets/caseBemol/educacaoImg.png";
import viagemVideo from "../../../assets/caseBemol/Viagens.mp4";
import topImgViagem from "../../../assets/caseBemol/viagemImg.png";
import comprasVideo from "../../../assets/caseBemol/Compras.mp4";
import topImgCompras from "../../../assets/caseBemol/comprasImg.png";

export const tools: ToolsIconInterface[] = [
    {
        value: 'figma',
    },
    {
        value: 'asana'
    },
    {
        value: 'ux'
    },
    {
        value: 'adobe'
    },
    {
        value: 'db'
    }
]

export const pushNotifications: pushNotificationsInterface[] = [
    {
        alt: 'educação',
        topImg: topImgEducation,
        video: educationVideo
    },
    {
        alt: 'viagem',
        topImg:topImgViagem,
        video:viagemVideo
    },
    {
        alt:'compras',
        topImg:topImgCompras,
        video:comprasVideo
    }
]