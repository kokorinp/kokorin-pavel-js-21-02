import { ROOT_URL } from './modules/consts';
import { Peoples } from './modules/peoples';

document.addEventListener('DOMContentLoaded', () => {
  const peoples = new Peoples(`${ROOT_URL}people/`);

  document.getElementById('next').addEventListener('click', () => {
    const z = peoples.nextLisener();
  });

  document.getElementById('prev').addEventListener('click', () => {
    const z = peoples.prevLisener();
  });

  function clearSort() {
    Array.from(document.getElementsByClassName('sort')).forEach((element: HTMLElement) => {
      // no-param-reassign
      // As this article explains, this rule is meant to avoid mutating the arguments object. If you assign to a parameter and then try and access some of the parameters via the arguments object, it can lead to unexpected results. You could keep the rule intact and maintain the AirBnB style by using another variable to get a reference to the DOM element and then modify that:
      const e = element;
      e.dataset.sort = '0';
      e.textContent = element.textContent.replace(/[\^˅]/g, '');
    });
  }
  Array.from(document.getElementsByClassName('sort')).forEach((e: HTMLElement) => {
    e.addEventListener('click', () => {
      const str = e.textContent.replace(/[\^˅]/g, '');
      if (e.dataset.sort === '1') {
        peoples.sort(e.dataset.sorttype, e.dataset.sortname, 2);
        clearSort();
        e.dataset.sort = '2';
        e.textContent = `˅${str}`;
      } else {
        peoples.sort(e.dataset.sorttype, e.dataset.sortname, 1);
        clearSort();
        e.dataset.sort = '1';
        e.textContent = `^${str}`;
      }
      peoples.draw();
    });
  });
});
