import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";

export default () => <></>;

// export default () => <div class="container">
// <div class="row">
//   <%- include("../partials/sidebar") %>
//   <main class="col-10 col-md-6 border border-2 p-0 d-flex flex-column">
//     <div class="d-flex col-auto-3 align-items-center">
//       <a href="/usuarios/<%=user.username%>" class="">
//         <i class="bi bi-arrow-left text-black ms-2"> </i>
//       </a>
//       <div class="ms-4 mt-2">
//         <h5><%= user.firstname %> <%= user.lastname %></h5>
//         <p class="text-secondary"><%= user.username %></p>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col d-inline-flex justify-content-center align-items-center">
//         <a href="/usuarios/followers" class="text-black" style="text-decoration: none"
//           >Followers</a
//         >
//       </div>
//       <div class="col d-inline-flex justify-content-center align-items-center">
//         <a
//           href="/usuarios/following"
//           class="text-black fw-bold text-decoration-none pb-3 border-bottom border-3"
//           style="border-color: rgba(29, 155, 240, 1) !important"
//           >Following</a
//         >
//       </div>
//     </div>
//     <hr />
//     <div class="row d-inline-flex justify-content-between align-items-center">
//       <div class="col flex-column d-flex gap-2 align-items-center p-2">
//         <% for( const follower of usersFollowing ) {%>
//         <div class="d-flex justify-content-between w-100 p-3">
//           <div class="d-flex align-items-center gap-3">
//             <a
//               class="btn btn-primary rounded-pill"
//               style="background-color: #cad8db; border: none"
//               href="/tweet"
//             >
//               <i class="fa-solid fa-user" style="color: #647788"></i>
//             </a>
//             <div class="d-flex flex-column">
//               <span style="font-size: 1.2rem"> <%= follower.username %></span>
//               <span class="text-secondary"> @<%= follower.username %></span>
//             </div>
//           </div>
//           <div>
//             <form action="/usuarios/follow" method="post">
//               <input type="hidden" name="id" value="<%=follower._id%>" />
//               <button
//                 type="submit"
//                 class="btn btn-light rounded-pill fw-bold border-1 border-black"
//                 style="background-color: white"
//               >
//                 Following
//               </button>
//             </form>
//           </div>
//         </div>
//         <% } %>
//       </div>
//     </div>
//   </main>
//   <%- include("../partials/aside") %>
// </div>
// </div>
