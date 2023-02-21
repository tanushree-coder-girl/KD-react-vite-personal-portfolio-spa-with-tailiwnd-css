
interface iProps {
    service:any
}

export default function Service(props:iProps) {
    const {service} = props;
  return (
    <div
      className="bg-white sm:cursor-pointer 
       relative group w-full flex items-center
        gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
    >
      
      <div>
      <div className="mb-3">
        {
          service?.icon &&
            <service.icon className="text-5xl"/>
        }
      </div>
        <h6 className="mb-3">{service?.title}</h6>
        <p className="italic">{service?.description}</p>

      </div>
    </div>
  )
}
