(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend.HideThisPage', factory) :
	(global.GOVUKFrontend = global.GOVUKFrontend || {}, global.GOVUKFrontend.HideThisPage = factory());
}(this, (function () { 'use strict';

function HideThisPage ($module) {
  this.$module = $module;
}

HideThisPage.prototype.openNewTab = function (e) {
  e.preventDefault();
  const target = e.target;

  window.open(target.getAttribute('data-new-tab-url'), '_newtab');

  // Check if the user's browser supports the history API
  // If so, we apply a history scrambling enhancement
  if (typeof window.history !== 'undefined' && typeof window.history === 'object') {
    document.title = target.getAttribute('data-fake-page-title');
    // Do not remove these 2 empty values. They are required to ensure we comply with the history API
    // https://developer.mozilla.org/en-US/docs/Web/API/History_API
    window.history.replaceState(null, '');
  }

  window.location.href = target.href;
};

HideThisPage.prototype.init = function () {
  this.$module.querySelector('.govuk-js-hide-this-page-button').addEventListener('click', this.openNewTab);
};

return HideThisPage;

})));
