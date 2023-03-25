import { ReactElement } from "react"

type ButtonProps = {
    children: ReactElement,
    size: string,
    color?: string,
}

const Button = ({children, color, size}: ButtonProps) =>{
    return <button style={{color: color, fontSize: size === 'xl' ? '32px':'16px'}} >
        {children}
    </button>
}

const RedButton = ({children, size}: ButtonProps) => {
    return <Button size={size} color='red'>
    {children}
</Button>
}

export const Liskov = () => {
    return (
        <div>
            <RedButton size='xl' color='black'>
                <div>
                    Mi boton
                </div>
            </RedButton>
        </div>
    )
}