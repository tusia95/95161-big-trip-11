
const filters = [{name: `Everything`, isChecked: `checked`}, {name: `Future`, isChecked: `null`}, {name: `Past`, isChecked: `null`}];
export const сreateFilterTemplate = () => {
  return (
    `<h2 class="visually-hidden">Filter events</h2>
      <form class="trip-filters" action="#" method="get">
      ${filters.map((filter) =>
      `<div class="trip-filters__filter">
      <input id="filter-${filter.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value=${filter.name} ${filter.isChecked}>
      <label class="trip-filters__filter-label" for="filter-${filter.name}">${filter.name}</label>
      </div>`).join(` `)}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
  );
};
