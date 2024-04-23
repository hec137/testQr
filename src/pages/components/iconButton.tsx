const IconButton = ({icon,click}: {icon: string, click: () => void}) => {
    return(
        <div onClick={() => {click();}} style={{
            width:"32px",
            height:"32px"
        }}>
            {icon}
        </div>
    );
}

export default IconButton;