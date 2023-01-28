import React, { useState } from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"

const CommentSection = ({post}:any) => {
   const [reply, setReply] = useState(false)
   return (
      <div className="w-full flex flex-col">
         <h4 className="uppercase font-semibold text-sm text-neutral-500 mb-4">Comments</h4>
         <div className="flex flex-col">
            {post.comments.nodes.filter((x:any)=>!x.parentId).map((comment:any)=>
               <Comment 
                  key={comment.id} 
                  comment={comment}
                  setReply={setReply}
                  reply={reply}
               />
            )}
         </div>
         <AddComment 
            post={post} 
            reply={reply}
            setReply={setReply}
         />
      </div>
   )
}
export default CommentSection
