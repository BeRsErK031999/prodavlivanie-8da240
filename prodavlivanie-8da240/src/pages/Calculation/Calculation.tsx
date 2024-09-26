import React from 'react';
import '../../styles/Calculation.css'; // подключаем стили
import Texts from './imports'; // Импортируем объект с текстовыми переменными
import koticImage from '../../assets/image/kotic.webp';

const Calculation: React.FC = () => {
    return (
        <div className="calculation-container">
            <div className="calculation-content">
                <h1>{Texts.pageTitle}</h1>

                <section>
                    <h2>{Texts.assumptionsTitle}</h2>
                    <p>{Texts.assumptionsText}</p>
                </section>

                <form>
                    <fieldset>
                        <legend>{Texts.externalForcesLegend}</legend>
                        <label>
                            {Texts.concentratedForceLabel}
                            <input type="number" name="force" defaultValue={20000} /> кг (1 тс = 10<sup>3</sup> кгс)
                        </label>

                        <label>
                            {Texts.considerMomentLabel}
                            <input type="checkbox" name="considerMoment" />
                        </label>

                        <label>
                            {Texts.momentXLabel}
                            <input type="number" name="momentX" defaultValue={100000} disabled /> кг·см (1 тс·м = 10<sup>5</sup> кг·см)
                        </label>

                        <label>
                            {Texts.momentYLabel}
                            <input type="number" name="momentY" defaultValue={120000} disabled /> кг·см
                        </label>

                        <label>
                            {Texts.halfMomentLabel}
                            <input type="checkbox" name="halfMoment" />
                        </label>

                        <label>
                            {Texts.soilReactionLabel}
                            <input type="number" name="soilReaction" defaultValue={1.0} /> ктс/см<sup>2</sup> (1 тс/м<sup>2</sup> = 0.1 кгс/см<sup>2</sup>)
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>{Texts.geometricCharacteristicsLegend}</legend>
                        <label>
                            {Texts.widthLabel}
                            <input type="number" name="width" defaultValue={40.0} /> см
                        </label>

                        <label>
                            {Texts.heightLabel}
                            <input type="number" name="height" defaultValue={50.0} /> см
                        </label>

                        <label>
                            {Texts.sectionHeightLabel}
                            <input type="number" name="sectionHeight" defaultValue={20.0} /> см
                        </label>

                        <label>
                            {Texts.concreteCoverLabel}
                            <input type="number" name="concreteCover" defaultValue={5.0} /> см
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>{Texts.concreteAndReinforcementLegend}</legend>
                        <label>
                            {Texts.concreteClassLabel}
                            <select name="concreteClass" defaultValue="B20">
                                <option value="B20">B20</option>
                                <option value="B25">B25</option>
                                <option value="B30">B30</option>
                                {/* Добавьте другие классы бетона при необходимости */}
                            </select>
                        </label>

                        <label>
                            {Texts.concreteCoefficientLabel}
                            <input type="number" name="concreteCoefficient" defaultValue={0.9} />
                        </label>

                        <label>
                            {Texts.considerReinforcementLabel}
                            <input type="checkbox" name="considerReinforcement" />
                        </label>

                        <label>
                            {Texts.reinforcementClassLabel}
                            <select name="reinforcementClass" defaultValue="A240">
                                <option value="A240">A240</option>
                                <option value="A400">A400</option>
                                <option value="A500">A500</option>
                                {/* Добавьте другие классы арматуры при необходимости */}
                            </select>
                        </label>

                        <label>
                            {Texts.reinforcementAreaLabel}
                            <input type="number" name="reinforcementArea" defaultValue={1.06} /> см<sup>2</sup>
                        </label>

                        <label>
                            {Texts.reinforcementStepLabel}
                            <input type="number" name="reinforcementStep" defaultValue={10.0} /> см
                        </label>
                    </fieldset>

                    <button type="submit">{Texts.calculateButtonText}</button>
                    <label>
                        <input type="checkbox" name="showInNewWindow" />
                        {Texts.showInNewWindowLabel}
                    </label>
                </form>
            </div>

            <div className="calculation-svg">
                <img src={koticImage} alt="Kotic" />
            </div>
        </div>
    );
}

export default Calculation;
