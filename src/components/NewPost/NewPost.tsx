import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "../Avatar";
import { PostLayout } from "./UserNewPost";
import { ModalContent, ModalOverlay, NewPostContainer, Title } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

export function NewPost() {
  const [post, setPost] = useState<string[]>([]);
  const [newPostText, setNewPostText] = useState("");

  function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();
    setPost([...post, newPostText]);

    setNewPostText("");
  }

  function handleNewPostChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewPostText(event.target.value);
  }

  function handleNewPostInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Preencha esse campo");
  }

  const isEmpty = newPostText.length === 0;

  return (
    <>
      <NewPostContainer>
        <Avatar
          src="https://github.com/Marc0sGabriel.png"
          alt={"foto de perfil"}
        />

        <Dialog.Root>
          <form onSubmit={handleCreateNewPost}>
            <header>
              <Dialog.Trigger asChild>
                <textarea required placeholder="Quais as novidades?" />
              </Dialog.Trigger>

              <Dialog.Portal>
                <ModalOverlay />
                <ModalContent>
                  <div className="headerModal">
                    <Title>Nova Postagem</Title>
                    <Dialog.Close asChild>
                      <X size={23} weight="bold" className="xIcon" />
                    </Dialog.Close>
                  </div>
                  <div>
                    <div className="Editor">
                      <textarea
                        required
                        onChange={handleNewPostChange}
                        value={newPostText}
                        onInvalid={handleNewPostInvalid}
                      />
                    </div>
                    <Dialog.Close asChild={true}>
                      <button
                        type="submit"
                        className="PublishButton"
                        onClick={handleCreateNewPost}
                        aria-label="Close"
                        disabled={isEmpty}
                      >
                        Publicar
                      </button>
                    </Dialog.Close>

                    <Dialog.Close asChild>
                      <button className="Cancel" aria-label="Close">
                        Cancelar
                      </button>
                    </Dialog.Close>
                  </div>
                </ModalContent>
              </Dialog.Portal>
            </header>
          </form>
        </Dialog.Root>
      </NewPostContainer>

      <div>
        {post
          .map((postagem) => {
            return (
              <div key={postagem}>
                <PostLayout key={postagem} content={postagem} />
              </div>
            );
          })
          .reverse()}
      </div>
    </>
  );
}
