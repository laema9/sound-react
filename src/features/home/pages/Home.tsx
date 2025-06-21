import { Navbar } from "@/shared/components/Navbar";
import FeedList from "../components/FeedList";
import { UploadSoundButton } from "@/features/sound/components/UploadSoundButton";

export default function Home () {
    return <>

        <header className="flex flex-col items-center sm:p-5">
            <img className="w-28 h-auto"src="sound.png" alt=""></img>
            <Navbar />
        </header>

        <section className="flex flex-col items-center p-5">
            <p className="mb-5"><UploadSoundButton /></p>
            

            <div className="w-[500px] space-y-5">
                <FeedList />
                <FeedList />
                <FeedList />
                <FeedList />
            </div>
        </section>

    </>
}