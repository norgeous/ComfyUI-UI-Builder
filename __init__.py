import os
import server
from aiohttp import web

NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}
WEBROOT = os.path.join(os.path.dirname(os.path.realpath(__file__)), "dist")

@server.PromptServer.instance.routes.get("/ui/")
def dungeon_entrance(request):
    return web.FileResponse(os.path.join(WEBROOT, "index.html"))

server.PromptServer.instance.routes.static("/ui/", path=WEBROOT)

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']
