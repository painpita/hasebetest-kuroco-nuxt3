<template>
  <div v-if="data" class="container">
    <h3>Map (Google Maps)</h3>
    <div>
    </div>
    <form id="topics_edit" @submit.prevent="update">
      <div>
        <GoogleMap
          :mapId="MAP_ID"
          ref="gmap"
          :center="mapCenter"
          :zoom="gmap_zoom"
          :map-type-id="gmap_type"
          style="width: 500px; height: 300px"
          @click="mark($event)"
          @zoom_changed="setZoom"
          @maptypeid_changed="gmap_type = $event"
          :api-key="key"
        >
          <AdvancedMarker
            v-if="markPlace"
            :options="markerOptions"
            @click="mapClicked"
          />
        </GoogleMap>
      </div>
      <input type="submit" value="Save" />
    </form>
  </div>
</template>

<script setup>
import { AdvancedMarker, GoogleMap } from "vue3-google-map";
const route = useRoute();
const config = useRuntimeConfig();
const key = config.public.gcpKey;
const gmap = ref(null);
const mapCenter = ref({ lat: 35.66107078220203, lng: 139.7584319114685 });
const markPlace = ref(null);
const markerOptions = computed(() => ({
  position: markPlace.value || mapCenter.value,
  draggable: true,
}));
const id = ref(route.params.id);
const contents = ref({});
const MAP_ID = "DEMO_MAP_ID";
console.log("googleMap", gmap.value);
const { data } = await useAsyncData("mapDetails", async () => {
  const url = `/rcms-api/1/newsdetail/${id.value}`;
  try {
    const response = await $fetch(url, {
      method: "GET",
      baseURL: config.public.apiBase,
      credentials: "include",
    });
    if (response.details) {
      return response.details;
    }
    return {};
  } catch (error) {
    return {};
  }
});
onMounted(() => {
  contents.value = data.value;
  if (contents.value.gmap?.gmap_x && contents.value.gmap?.gmap_y) {
    const lat = Number(contents.value.gmap.gmap_y)
      ? Number(contents.value.gmap.gmap_y)
      : 35.66107078220203;
    const lng = Number(contents.value.gmap.gmap_x)
      ? Number(contents.value.gmap.gmap_x)
      : 139.7584319114685;
    mapCenter.value = { lat, lng };
    markPlace.value = { lat, lng };
  }
});
const gmap_zoom = computed({
  get: () => Number(contents.value.gmap?.gmap_zoom) || 15,
  set: (val) => {
    if (!contents.value.gmap) contents.value.gmap = {};
    contents.value.gmap.gmap_zoom = String(val);
  },
});
const gmap_type = computed({
  get: () => contents.value.gmap?.gmap_type || "roadmap",
  set: (val) => {
    if (!contents.value.gmap) contents.value.gmap = {};
    contents.value.gmap.gmap_type = val;
  },
});
function mapClicked(event) {
  // console.log("mapCLicked", { event });
}
function setZoom() {
  contents.value.gmap.gmap_zoom = gmap.value.zoom;
}
</script>