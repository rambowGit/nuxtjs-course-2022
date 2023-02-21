export default defineNuxtRouteMiddleware( () =>{
	console.log("I am from auth middleware");
	const auth = useAuth();
	return auth.value.isAuthenticated;
})