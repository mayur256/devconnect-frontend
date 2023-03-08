// top level imports
import { ReactElement, ComponentPropsWithRef, SyntheticEvent, useRef, forwardRef, Ref } from "react";

// Antd
import { Input, InputRef } from "antd";


// Props type definition
interface TextType extends ComponentPropsWithRef<typeof Input> {
    value: string;
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
};

// Component definition
export function TextField({
    value = '',
    onChange,
    ...rest
}: TextType): ReactElement {

    return (
        <Input
            value={value}
            onChange={onChange}
        />
    )
};
