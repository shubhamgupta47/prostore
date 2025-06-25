import { cn } from "@/lib/utils";

const ProductPrice = ({value, className}: {value: number, className?: string}) => {
  const stringvalue = value.toFixed(2);
  const [intValue, floatValue] = stringvalue.split('.');
  return ( <p className={cn('text-2xl', className)}>
    <span className="text-xs align-super">$</span>
    {intValue}
    <span className="text-xs align-super">.{floatValue}</span>
  </p> );
}
 
export default ProductPrice;