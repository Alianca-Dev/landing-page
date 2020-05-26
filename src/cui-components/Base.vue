<template>
  <div>
    <h1 id="main-header" class="theme-bg-dark theme-text-white">
      <span id="main-header-path">Vue.js Complete UI &nbsp;/&nbsp;</span>
      <b-dropdown text="Base" variant="link" toggle-class="theme-text-white">
        <b-dropdown-item to="/complete-ui/plugins" :exact="true" class="text-big"><span class="d-inline-block py-2 px-2">Plugins</span></b-dropdown-item>
        <b-dropdown-item to="/complete-ui/charts" :exact="true" class="text-big"><span class="d-inline-block py-2 px-2">Charts</span></b-dropdown-item>
      </b-dropdown>
    </h1>

    <cui-typography />
    <cui-utilities />
    <cui-buttons />
    <cui-badges />
    <cui-button-groups />
    <cui-button-dropdowns />
    <cui-dropdowns />
    <cui-spinners />
    <cui-avatars />
    <cui-overlay />
    <cui-sidebar />
    <cui-navs />
    <cui-pagination />
    <cui-progress-bars />
    <cui-list-groups />
    <cui-alerts />
    <cui-callouts />
    <cui-toasts />
    <cui-tooltips-and-popovers />
    <cui-modals />
    <cui-breadcrumbs />
    <cui-form-controls />
    <cui-custom-checkboxes-and-radios />
    <cui-custom-select />
    <cui-file-browser />
    <cui-bs-vue-form-spinbutton />
    <cui-bs-vue-pickers />
    <cui-custom-range-input />
    <cui-form-tags />
    <cui-forms />
    <cui-input-groups />
    <cui-switchers />
    <cui-app-brand />
    <cui-navbar />
    <cui-sidenav />
    <cui-footer />
    <cui-tables />
    <cui-media />
    <cui-thumbnails />
    <cui-cards />
    <cui-accordion />
    <cui-carousel />

    <div class="cui-bottom-spacer" />
  </div>
</template>

<style src="./Index.scss" lang="scss"></style>

<script>
import CuiTypography from './CuiTypography'
import CuiUtilities from './CuiUtilities'
import CuiButtons from './CuiButtons'
import CuiBadges from './CuiBadges'
import CuiButtonGroups from './CuiButtonGroups'
import CuiButtonDropdowns from './CuiButtonDropdowns'
import CuiDropdowns from './CuiDropdowns'
import CuiSpinners from './CuiSpinners'
import CuiAvatars from './CuiAvatars'
import CuiOverlay from './CuiOverlay'
import CuiSidebar from './CuiSidebar'
import CuiNavs from './CuiNavs'
import CuiPagination from './CuiPagination'
import CuiProgressBars from './CuiProgressBars'
import CuiListGroups from './CuiListGroups'
import CuiAlerts from './CuiAlerts'
import CuiCallouts from './CuiCallouts'
import CuiToasts from './CuiToasts'
import CuiTooltipsAndPopovers from './CuiTooltipsAndPopovers'
import CuiModals from './CuiModals'
import CuiBreadcrumbs from './CuiBreadcrumbs'
import CuiFormControls from './CuiFormControls'
import CuiCustomCheckboxesAndRadios from './CuiCustomCheckboxesAndRadios'
import CuiCustomSelect from './CuiCustomSelect'
import CuiFileBrowser from './CuiFileBrowser'
import CuiCustomRangeInput from './CuiCustomRangeInput'
import CuiBsVueFormSpinbutton from './CuiBsVueFormSpinbutton'
import CuiBsVuePickers from './CuiBsVuePickers'
import CuiFormTags from './CuiFormTags'
import CuiForms from './CuiForms'
import CuiInputGroups from './CuiInputGroups'
import CuiSwitchers from './CuiSwitchers'
import CuiAppBrand from './CuiAppBrand'
import CuiNavbar from './CuiNavbar'
import CuiSidenav from './CuiSidenav'
import CuiFooter from './CuiFooter'
import CuiTables from './CuiTables'
import CuiMedia from './CuiMedia'
import CuiThumbnails from './CuiThumbnails'
import CuiCards from './CuiCards'
import CuiAccordion from './CuiAccordion'
import CuiCarousel from './CuiCarousel'

export default {
  components: {
    'cui-typography': CuiTypography,
    'cui-utilities': CuiUtilities,
    'cui-buttons': CuiButtons,
    'cui-badges': CuiBadges,
    'cui-button-groups': CuiButtonGroups,
    'cui-button-dropdowns': CuiButtonDropdowns,
    'cui-dropdowns': CuiDropdowns,
    'cui-spinners': CuiSpinners,
    'cui-avatars': CuiAvatars,
    'cui-overlay': CuiOverlay,
    'cui-sidebar': CuiSidebar,
    'cui-navs': CuiNavs,
    'cui-pagination': CuiPagination,
    'cui-progress-bars': CuiProgressBars,
    'cui-list-groups': CuiListGroups,
    'cui-alerts': CuiAlerts,
    'cui-callouts': CuiCallouts,
    'cui-toasts': CuiToasts,
    'cui-tooltips-and-popovers': CuiTooltipsAndPopovers,
    'cui-modals': CuiModals,
    'cui-breadcrumbs': CuiBreadcrumbs,
    'cui-form-controls': CuiFormControls,
    'cui-custom-checkboxes-and-radios': CuiCustomCheckboxesAndRadios,
    'cui-custom-select': CuiCustomSelect,
    'cui-file-browser': CuiFileBrowser,
    'cui-custom-range-input': CuiCustomRangeInput,
    'cui-bs-vue-form-spinbutton': CuiBsVueFormSpinbutton,
    'cui-bs-vue-pickers': CuiBsVuePickers,
    'cui-form-tags': CuiFormTags,
    'cui-forms': CuiForms,
    'cui-input-groups': CuiInputGroups,
    'cui-switchers': CuiSwitchers,
    'cui-app-brand': CuiAppBrand,
    'cui-navbar': CuiNavbar,
    'cui-sidenav': CuiSidenav,
    'cui-footer': CuiFooter,
    'cui-tables': CuiTables,
    'cui-media': CuiMedia,
    'cui-thumbnails': CuiThumbnails,
    'cui-cards': CuiCards,
    'cui-accordion': CuiAccordion,
    'cui-carousel': CuiCarousel
  },
  metaInfo: {
    title: 'Base - Vue.js Complete UI'
  }
}
</script>
