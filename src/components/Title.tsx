import * as React from 'react';

export interface TitleProps {
    title: string
    color: string
}

const Title: React.SFC<TitleProps> = ({ title, color }) => {
    return (
        <div className="subtitle" style={{ backgroundColor: color }}>
            <h3>{title}</h3>
        </div>
    );
}

export default Title;