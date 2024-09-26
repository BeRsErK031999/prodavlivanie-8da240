import React from 'react';

interface DynamicSVGProps {
    force: number;
    momentX: number;
    momentY: number;
}

const DynamicSVG: React.FC<DynamicSVGProps> = ({ force, momentX, momentY }) => {
    return (
        <svg width="100%" height="400px" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            {/* Пример статической части SVG */}
            <rect x="50" y="50" width="300" height="300" stroke="black" fill="none" />

            {/* Динамическая часть SVG, зависит от данных */}
            <text x="100" y="100" fontSize="20" fill="black">Force: {force} кгс</text>
            <text x="100" y="140" fontSize="20" fill="black">Moment X: {momentX} кг·см</text>
            <text x="100" y="180" fontSize="20" fill="black">Moment Y: {momentY} кг·см</text>

            {/* Можете добавить больше динамических элементов */}
        </svg>
    );
}

export default DynamicSVG;
