/**
 * Pokemon chart component
 * 
 * @element pokemonchart-component
 * 
 * @prop {Array} stats - List of stats form pokeapi
 */

import { html, css, LitElement } from 'lit-element';

export class PokemonChart extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
      }
      .chart {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-weight: 500;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          max-width:100%;
          grid-gap: 1vh;
          overflow: hidden;
      }
      .chart__stat {
        grid-column: 1;
        text-align: right;
        text-transform: capitalize;
      }
      .chart__bar-hp{
        list-style: none;
        text-align: left;
        grid-column: 2;
        background-color: #1bf741; 
      }

      .chart__bar-attack{
        list-style: none;
        text-align: left;
        grid-column: 2;
        background-color: #d10101;
      }

      .chart__bar-defense{
        list-style: none;
        text-align: left;
        grid-column: 2;
        background-color: #0170cb;
      }

      .chart__bar-special-attack{
        list-style: none;
        text-align: left;
        grid-column: 2;
        background-color: #cb015e;
      }

      .chart__bar-special-defense{
        list-style: none;
        text-align: left;
        grid-column: 2;
        background-color: #01cbca;
      }
      .chart__bar-speed{
        list-style: none;
        text-align: left;
        grid-column: 2;
        background-color: #f7ee1b;
      }
    `;
  }

  static get properties() {
    return {
      stats: { type: Array }
    };
  }

  constructor() {
    super();

  }



  render() {
    return html`
     
      <div class="chart">
        ${this.stats.map( stat => html`

            <div class="chart__stat ">${stat.stat.name}</div>
            <div class="chart__bar-${stat.stat.name}" style="width: ${stat.base_stat/2}%"></div>
            
        `)} 
      
      </div>
    `;
  }
}
