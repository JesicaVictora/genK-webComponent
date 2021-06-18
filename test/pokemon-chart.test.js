import { html, fixture, expect } from '@open-wc/testing';

import '../pokemon-chart.js';

describe('PokemonChart', () => {
  it('should print 6 stats', async () => {
    const mockStats = [
      {"base_stat":88,"effort":1,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}},
      {"base_stat":156,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},
      {"base_stat":56,"effort":0,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},
      {"base_stat":12,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},
      {"base_stat":48,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},
      {"base_stat":44,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}}
      ];
    const el = await fixture(html`<pokemon-chart .stats=${mockStats} ></pokemon-chart>`);
    expect(el.stats.lenght).to.equal(6);
  });

});
