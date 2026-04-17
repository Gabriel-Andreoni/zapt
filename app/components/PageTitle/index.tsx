import './style.css';

type PageTitleProps = {
    title: string,
    color: string,
    size?: string,
}


export function PageTitle({title, color, size}: PageTitleProps) {
    return (
        <div className="w-full flex gap-2">
            <span className={`asset w-2 h-${size ? size : '6'} block bg-[#0554f2]`}></span> <h3 style={{color: color, fontSize: size+"px"}}>{title}</h3>
        </div>
    )
}