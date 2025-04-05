import { Users, BookOpen, MessageSquare, Star, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function Pricing() {
  return(
    <section id="pricing" className="text-center">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-center mb-12">
      Simple Pricing
    </h2>
    <div className="max-w-md mx-auto shadow-xl">
      <Card className="bg-while  backdrop-blur-sm border-slate/30">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl mb-2">Free</CardTitle>
          <CardDescription className="text-slate text-xl">$0/month</CardDescription>
          <CardDescription className="text-slate text-xl">For early access</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {[
              "Unlimited study groups",
              "Unlimited resource sharing",
              "Real-time chat",
              "File sharing up to 100MB",
              "Basic analytics",
              "Community support"
            ].map((feature, index) => (
              <li key={index} className="flex items-center text-slate">
                <Check className="w-5 h-5 text-green-400 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link href="https://studenthub.andreipau.me">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full">
              Get Started
            </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  </div></section>);
}

export default Pricing;
