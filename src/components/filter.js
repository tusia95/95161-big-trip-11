export const сreateFilterTemplate = (filterNames) => {
  return (
    `<h2 class="visually-hidden">Filter events</h2>
      <form class="trip-filters" action="#" method="get">
      ${filterNames.map((it) =>
      `<div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">${it}</label>
      </div>`).join(` `)}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
  );
};
