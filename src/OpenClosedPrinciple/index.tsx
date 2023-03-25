import { FC, ReactElement } from "react";

type TitleProps = {
    children: ReactElement;
    title: string;
}

const Title: FC<TitleProps> = ({title, children}) => {
    return <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>{title}</h1>
        {children}
    </div>    
}

type TitleWithLinkProps = {
    title: string,
    href: string,
    buttonText: string,
}

export const TitleWithLink: FC<TitleWithLinkProps> = ({title, href, buttonText}) =>{
    return (
        <Title title={title}>
            <div>
                <a href={href}>
                    {buttonText}
                </a>
            </div>
        </Title>
    )
}

type TitleWithButtonProps = {
    title: string;
    buttonText: string;
    onClick: () => void;
}

export const TitleWithButton: FC<TitleWithButtonProps> = ({
    title,
    buttonText,
    onClick
}) => {
    return <Title title={title}>
        <button onClick={onClick}>
            {buttonText}
        </button>
    </Title>
}

export default Title;
