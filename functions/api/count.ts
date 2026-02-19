interface Env {
  COUNTER_KV: KVNamespace;
}

const COUNTER_KEY = 'global-counter';

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const count = await context.env.COUNTER_KV.get(COUNTER_KEY);
    const currentCount = count ? parseInt(count, 10) : 0;
    
    return new Response(JSON.stringify({ count: currentCount }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch count', count: 0 }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    // Get current count
    const count = await context.env.COUNTER_KV.get(COUNTER_KEY);
    const currentCount = count ? parseInt(count, 10) : 0;
    
    // Increment count
    const newCount = currentCount + 1;
    
    // Store new count
    await context.env.COUNTER_KV.put(COUNTER_KEY, newCount.toString());
    
    return new Response(JSON.stringify({ count: newCount }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to increment count' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
