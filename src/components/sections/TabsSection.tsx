import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';

export const TabsSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Tabs</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Tabs organize content into separate views that users can switch between, improving navigation in compact spaces.</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic tabs</h3>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account" className='cursor-pointer'>Account</TabsTrigger>
                <TabsTrigger value="password" className='cursor-pointer'>Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Account settings here.</TabsContent>
              <TabsContent value="password">Change password here.</TabsContent>
            </Tabs>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Vertical Tabs</h3>
            <Tabs defaultValue="profile" orientation="vertical" className="flex flex-row items-center gap-4">
              <TabsList className="flex flex-col space-y-1 h-fit">
                <TabsTrigger value="profile" className='cursor-pointer w-full'>Profile</TabsTrigger>
                <TabsTrigger value="settings" className='cursor-pointer w-full'>Settings</TabsTrigger>
                <TabsTrigger value="notifications" className='cursor-pointer w-full'>Notifications</TabsTrigger>
              </TabsList>
              <div>
                <TabsContent value="profile">Profile content.</TabsContent>
                <TabsContent value="settings">Settings content.</TabsContent>
                <TabsContent value="notifications">Notifications content.</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}