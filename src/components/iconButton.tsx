import Image from 'next/image'

const IconButton = ({icon, click, enabled}: {icon: string, click: () => void, enabled?: boolean}) => {
    return(
        <div onClick={() => {click();}} style={{
            width: "32px",
            height: "32px",
            border: "1px solid #fff"
        }}>
            <Image src={icon} alt={'none'} width="32" height="32" color='#fff'></Image>
        </div>
    );
}

export default IconButton;