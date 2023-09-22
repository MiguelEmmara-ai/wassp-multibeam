import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: 'button' | 'submit'
  containerStyles?: string;
  handleClick?:
  MouseEventHandler<HTMLButtonElement>
}

export interface ContentProps {
  number: string;
  title: string;
}

export interface NewsImageProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}
