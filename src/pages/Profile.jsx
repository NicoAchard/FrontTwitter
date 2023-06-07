import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";

export default () => <></>;

// export default () => <div class="container-fluid container-lg">
// <div class="row">
//   <%- include("../partials/sidebar") %>
//   <main class="col-10 col-md-6 border border-2 p-0 d-flex flex-column">
//     <div class="w-100" style="height: 150px; background-color: rgb(29, 155, 240)"></div>
//     <!--Fondo azul-->
//     <div class="d-flex justify-content-between px-2">
//       <div class="d-flex flex-column position-relative gap-2" style="bottom: 50px">
//         <img
//           src="<%=userUrl.profilePicture%>"
//           alt="Avatar del usuario <%= userUrl.username %>"
//           class="img_avatar_perfil border-5 border border-white"
//         />
//         <h1 class="h6"><%= userUrl.username %></h1>
//       </div>
//     </div>
//     <div class="d-flex justify-content-between px-2 position-relative" style="bottom: 60px">
//       <div>
//         <small class="text-muted">@<%= userUrl.username %></small>
//       </div>
//       <div>
//         <small class="text-muted">
//           <span class="text-dark"><%= userUrl.following.length %></span>
//           <a href="/usuarios/following" class="text-dark" style="text-decoration: none">
//             Following</a
//           >
//         </small>
//         <small class="text-muted">
//           <span class="text-dark"><%= userUrl.followers.length %></span>
//           <a href="/usuarios/followers" class="text-dark" style="text-decoration: none">
//             Followers</a
//           >
//         </small>
//       </div>
//     </div>
//     <div class="px-2 pb-3">
//       <b
//         class="border-bottom border-4 pb-2"
//         style="border-color: rgba(29, 155, 240, 1) !important"
//         >Tweets
//       </b>
//     </div>
//     <!--Lista de tweets-->
//     <% for( tweet of userUrl.tweetList ) { %>
//     <div class="d-flex flex-column p-3 border-bottom border-top border-1">
//       <div class="d-flex gap-3">
//         <img
//           src="<%=userUrl.profilePicture  %>"
//           alt="Avatar del usuario <%=userUrl.username%>"
//           class="img_avatar"
//         />
//         <div class="d-flex flex-column">
//           <div class="d-flex gap-2 flex-column">
//             <h5><%= userUrl.username %></h5>
//             <!-- Cambiar la fecha del tweet para que tenga un formato mas amigable-->
//             <span class="text-secondary">@<%=userUrl.username%> - <%= formattedDate%></span>
//           </div>
//           <p><%= tweet.content%></p>
//           <div class="d-flex justify-content-between">
//             <!--Icono para dar like al tweet-->

//             <form action="/tweet/like" method="POST" class="d-flex align-items-center gap-2">
//               <span class="text-pink"><%= tweet.likes.length %></span>
//               <input type="hidden" name="tweetInfo" id="tweetInfo" value="<%=tweet._id%>" />
//               <% if (tweet.likes.includes(user._id)) { %>
//               <button type="submit" style="background: none; border: none; padding: 0">
//                 <i class="fa-solid fa-heart" style="color: #f91894"></i>
//               </button>
//               <% } else { %>
//               <button type="submit" style="background: none; border: none; padding: 0">
//                 <i class="fa-regular fa-heart" style="color: #f91894"></i>
//               </button>
//               <% } %>
//             </form>

//             <% if (user.tweetList.includes(tweet._id)) { %>
//             <form action="/tweet/<%= tweet._id %>?_method=DELETE" method="post">
//               <button type="submit" style="background: none; border: none; padding: 0">
//                 <i class="fa-solid fa-trash" style="color: #dc3545"></i>
//               </button>
//             </form>
//             <% } %>
//           </div>
//         </div>
//       </div>
//     </div>
//     <% } %>
//   </main>
//   <%- include("../partials/aside") %>
// </div>
// </div>
