import React, {ChangeEvent, SyntheticEvent} from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void; // return void most of the time in react 
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props): JSX.Element => {

    return (
        <div>
            <input type="text" value={search} onChange={(e) =>handleChange(e)} />
            <button onClick={(e) => onClick(e)} /> 
        </div>
    )
}

export default Search