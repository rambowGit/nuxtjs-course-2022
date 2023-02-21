export default defineNuxtRouteMiddleware(() => {
	console.log("Global middleware page change count");
	const pageVisitCount = usePageVisitCount();
  pageVisitCount.value++;
});