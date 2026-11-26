import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { supabase } from './supaClient'

function protect_route ({children}: { children: React.ReactNode}) { 
    const [session, setSession] = useState<unknown>(undefined);
    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => setSession(data.session))
        const { data: listener } = supabase.auth.onAuthStateChange((e, s) => setSession(s))
        return () => listener.subscription.unsubscribe()
    }, [])
    if (session === undefined) {
        return <p>Loading...</p>
    }
    if (!session) { 
        return <Navigate to='/login' replace />
    }
    return <>{children}</>
}

export default protect_route;