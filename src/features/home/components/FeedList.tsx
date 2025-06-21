import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"
import { Heart, Play } from "lucide-react"

export default function FeedList () {
    return <>
    
        <Card>
            <CardHeader>
                <CardTitle>"Disorder"</CardTitle>
                <CardDescription className="flex gap-1">by <p className="hover:text-gray-200">@laema9</p></CardDescription>
                <CardAction><Heart className="w-5 h-auto hover:text-gray-500"/></CardAction>
            </CardHeader>
            <CardContent>
                <img className="rounded-xl" src="cover.jpg" alt="image" />
            </CardContent>
            <CardFooter>
                <p className="flex gap-2"><Play/>Audio player here</p>
            </CardFooter>
        </Card>

    </>
}