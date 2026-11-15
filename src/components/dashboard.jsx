export default function Dashboard(){
return(
<div className="grid grid-cols-3">
    <nav className="flex flex-col w-[20%]">
        <img src='/images/logo.webp' className="w-10 h-10 object-contain"/>
        <p>store status</p>
        <p>pruducts</p>
        <p>Add new</p>
    </nav>
    <div></div>
    <div className="flex flex-col w-[20%]"></div>
</div>
)
}